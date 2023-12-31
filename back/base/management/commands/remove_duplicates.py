# your_app/management/commands/remove_duplicates.py

from django.core.management.base import BaseCommand
from base.models import Category
from django.db.models import Count

class Command(BaseCommand):
    help = 'Remove duplicate entries in the Category model'

    def handle(self, *args, **options):
        duplicate_categories = Category.objects.values('name').annotate(name_count=Count('name')).filter(name_count__gt=1)

        for category in duplicate_categories:
            duplicate_entries = Category.objects.filter(name=category['name'])
            entry_to_keep = duplicate_entries.order_by('id').first()
            duplicate_entries.exclude(id=entry_to_keep.id).delete()

        self.stdout.write(self.style.SUCCESS('Duplicate entries removed successfully.'))
